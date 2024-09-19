<template>
  <div>
    <div class="card">
        <p class="card-content1">Image</p>
        <p class="card-content2">Title</p>
        <button class="card-content3">Add to card</button>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.card{
    width: 200px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 15px;
}
.card-content1{
    margin: 0;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #808080;
    padding: 30px;
}
.card-content2{
    padding: 10px;
}
.card-content3{
    padding: 10px;
    padding-left: 55px;
    padding-right: 55px;
    margin-bottom: 10px;
    border-radius: 3px;
    border: 1px solid;
}
</style>