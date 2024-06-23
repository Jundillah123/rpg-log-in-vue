<template>
  <div class="about">
    <h1>This is an about page</h1>
    <table>
      <thead>
        <th>
          <td>No</td>
        </th>
        <th>
          <td>image</td>
        </th>
        <th>
          <td>title</td>
        </th>
        <th>
          <td>descripsi</td>
        </th>
        <th>
          <td>category</td>
        </th>
        <th>
          <td>Price</td>
        </th>
      </thead>
      <tbody>
        <tr  v-for="(index, item) in dataProduct" :key="index">
          <td>{{ index + 1 }}</td>
          <td><img :src="item.images" style="width: 50px;"alt=""></td>
          <td>{{ item. }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default {
  name:'AboutView',

  data() {
    return {
   dataProduct:[]
    }
  },
  mounted() {
   this.getlistdataproduct(),
  },
  methods:{
    getlistdataproduct(){
      this.$axios.get('products?limit=20&offset=5')
      .then(res => {
        let productdata = res.data
        let dataImage = res.data.images[1]
        dataImage(/^(?:https?:\/))
        console.log('ini data asli', product)
        // this.dataProduct = res.data
        productdata.forEach(item => {
          this.dataProduct.push({
            'images': item.category?.image,
            'category nama': item descripsi,
            'category': item.category?.name,
            'name': item.title,
            'price': item.price
          })
        });
        console.log(,this.dataProduct)
      });
    }
  }
}
</script>
