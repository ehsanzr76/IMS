<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <v-btn outlined class="ml-3" color="#8a2580">
    <router-link to="create/employee" class="text-decoration-none" style="color: #8a2580">کارمند جدید</router-link>
    <v-icon>mdi-plus</v-icon>
    </v-btn>
    <base-material-card
      icon="mdi-clipboard-text"
      title="لیست کارمندان"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
        <tr>
          <th class="primary--text">
            شماره
          </th>
          <th class="primary--text">
            نام
          </th>
          <th class="primary--text">
            Country
          </th>
          <th class="primary--text">
            City
          </th>
          <th class="text-right primary--text">
            Salary
          </th>
        </tr>
        </thead>

        <tbody>
        <tr>
          <td>1</td>
          <td>Dakota Rice</td>
          <td>Niger</td>
          <td>Oud-Turnhout</td>
          <td class="text-right">
            $36,738
          </td>
        </tr>

        <tr>
          <td>2</td>
          <td>Minverva Hooper</td>
          <td>Curaçao</td>
          <td>Sinaas-Waas</td>
          <td class="text-right">
            $23,789
          </td>
        </tr>

        <tr>
          <td>3</td>
          <td>Sage Rodriguez</td>
          <td>Netherlands</td>
          <td>Baileux</td>
          <td class="text-right">
            $56,142
          </td>
        </tr>

        <tr>
          <td>4</td>
          <td>Philip Chaney</td>
          <td>Korea, South</td>
          <td>Overland Park</td>
          <td class="text-right">
            $38,735
          </td>
        </tr>

        <tr>
          <td>5</td>
          <td>Doris Greene</td>
          <td>Malawi</td>
          <td>Feldkirchen in Kärnten</td>
          <td class="text-right">
            $63,542
          </td>
        </tr>

        <tr>
          <td>6</td>
          <td>Mason Porter</td>
          <td>Chile</td>
          <td>Gloucester</td>
          <td class="text-right">
            $78,615
          </td>
        </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

    <div class="py-3"/>
  </v-container>

</template>

<script>
export default {
  name: "Create"
}
</script>

<style scoped>

</style>
