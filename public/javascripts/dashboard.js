$(document).ready(function(){
  $('.item').on('click', function(){
    if(confirm("Do you want to delete this project?")){
      $.ajax({
        url: `/admin/delete/${this.id}`,
        type: 'DELETE',
        data: {},

      }).then((data)=>{
        //alert(data);
        location.href="/admin"
      })
    }
  })
})
