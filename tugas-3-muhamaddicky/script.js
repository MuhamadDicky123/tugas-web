// Step 1: Membuat array objek "library" dengan 3 buku
const library = [
    {
      title: "Buku Pertama",
      author: "Penulis Pertama",
      status: {
        own: true,
        reading: false,
        read: false
      }
    },
    {
      title: "Buku Kedua",
      author: "Penulis Kedua",
      status: {
        own: true,
        reading: false,
        read: false
      }
    },
    {
      title: "Buku Ketiga",
      author: "Penulis Ketiga",
      status: {
        own: true,
        reading: false,
        read: false
      }
    }
  ];
  
  // Step 2: Menandai semua buku sebagai telah dibaca
  library.forEach(book => {
    book.status.read = true;
  });
  
  // Step 3: Mengubah struktur judul buku pertama dan mengganti nama variabel menjadi "firstBook"
const firstBook = "Judul buku pertama";
library[0].title = firstBook;
  
  // Step 4: Mengubah objek "library" menjadi bentuk JSON
  const libraryJSON = JSON.stringify(library);
  
  console.log(libraryJSON);
  