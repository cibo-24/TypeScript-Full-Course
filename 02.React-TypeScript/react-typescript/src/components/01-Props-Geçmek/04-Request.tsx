import React from 'react'

// API'dan veri çekerken bunu props olarak geçmek.
// props'lara type vermek yerine onların durumunu kontrol eden bir koşulda girebiliriz.

type requestProps = {
    status: "loading" | "success" | "error" ,
}

function Request(props: requestProps) {

    let message = "";

    if(props.status === "loading")
    {
        message = "Yükleniyor"
    }
    if(props.status === "success")
    {
        message = "Başarılı şekilde yüklendi"
    }
    if(props.status === "error")
    {
        message = "Hata!!!"
    }


  return (
    <div>
        {message}
    </div>
  )
}

export default Request