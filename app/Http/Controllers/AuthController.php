<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Repositories\AuthRepository;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    /**
     * @var AuthRepository
     */
    private AuthRepository $RegisterRepo;

    /**
     * Create a new AuthController instance.
     *
     * @param AuthRepository $repo
     */
    public function __construct(AuthRepository $repo)
    {
        $this->RegisterRepo = $repo;
        $this->middleware('Jwt', ['except' => ['login' , 'register']]);
    }


    public function register(RegisterRequest $request): JsonResponse
    {
        $request->safe()->all();
        $this->RegisterRepo->create($request->name, $request->email, $request->password);
        return $this->login($request);
    }

    /*
     * Get a JWT via given credentials.
     *
     * @return JsonResponse
     */
    public function login(LoginRequest $request): JsonResponse
    {
        $request->safe()->all();
        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return JsonResponse
     */
    public function me(): JsonResponse
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return JsonResponse
     */
    public function logout(): JsonResponse
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return JsonResponse
     */
    public function refresh(): JsonResponse
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param string $token
     *
     * @return JsonResponse
     */
    protected function respondWithToken(string $token): JsonResponse
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
