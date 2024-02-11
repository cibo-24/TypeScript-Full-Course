// Normalde component içerisinde propslar için yaptığımız type kontrolünü burada ana bir component içerisinde tanımlayarak bu type'ları artık her yerde kullanabilme özelliğine sahibim.


export type inst = {
    instructorNameLastName: {
        fistName: string,
        lastName: string,
    }
}


export type arrayProps = {
    arrayListNameLastName: {
      firstName: string,
      lastName: string,
      id: number,
    }[]
  }