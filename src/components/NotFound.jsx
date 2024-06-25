import React from 'react'

const NotFound = () => {
  return (
    <div className=' text-center flex flex-col items-center m-3'>
      <img width={450} src="https://texnomart.uz/_nuxt/img/error.7b47c4e.svg" alt="" />
      <b>Саҳифа топилмади!</b>
      <p className=' w-[500px]'>
        Сиз нотўғри манзилни киритган бўлишингиз мумкин. Қидирувдан фойдаланиб
        кўринг ёки <a className='text-blue-500' href="/">асосий саҳифага</a> ўтинг.
      </p>
    </div>
  );
}

export default NotFound