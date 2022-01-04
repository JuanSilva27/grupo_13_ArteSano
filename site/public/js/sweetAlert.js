    let eliminar = document.getElementsById('eliminar')
    eliminar.onclick = eliminar()
    
    function eliminar() {
    Swal.fire({
        title: 'Estas segura de eliminar el producto?',
        text: "Esta accion es irreversible!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si! Eliminalo'
      }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
            'Eliminado!',
            'El producto ha sido eliminado correctamente',
            'success'
          ),
           window.location = '/admin/delete'+id;
        }
      })
    }