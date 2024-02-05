import React from 'react'

const Product = () => {
  return (
    <div>
        {/* <!-- component --> */}
<div class="mx-auto container px-6 xl:px-0 py-12">
  {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}

  <div class="flex flex-col">
    <div class="flex flex-col justify-center">
      <div class="relative">
        <img class="hidden sm:block w-full" src="https://i.ibb.co/HxXSY0j/jason-wang-Nx-Awry-Abt-Iw-unsplash-1-1.png" alt="sofa" />
        <img class="sm:hidden w-full" src="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png" alt="sofa" />
        <div class="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
          <p class="text-3xl sm:text-4xl font-semibold leading-9 text-white">Range Comfort Sofas</p>
        </div>
      </div>
    </div>
    <div class="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
      <div class="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
        <img class="group-hover:opacity-60 transition duration-500" src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png" alt="sofa-2" />
        <div class="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
          <div>
            <p class="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">Sectional Sofa</p>
          </div>
          <div>
            <p class="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white"></p>
          </div>
        </div>
        <div class="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
          <button class="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
          <button class="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
        </div>
        <div class="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15 13H13V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V13H9C8.73479 13 8.48043 12.8946 8.2929 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.2929 11.2929C8.48043 11.1054 8.73479 11 9 11H11V9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9V11H15C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071C15.5196 12.8946 15.2652 13 15 13Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor" />
              <path d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C11.8684 21.0008 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.23C1.99866 7.84443 2.54536 6.51482 3.51999 5.53C4.50226 4.55051 5.83283 4.00047 7.21999 4.00047C8.60716 4.00047 9.93773 4.55051 10.92 5.53L12 6.61L13.08 5.53C14.0623 4.55051 15.3928 4.00047 16.78 4.00047C18.1672 4.00047 19.4977 4.55051 20.48 5.53C21.4546 6.51482 22.0013 7.84443 22.0013 9.23C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0008 12 21Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      <div class="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
        <img class="group-hover:opacity-60 transition duration-500" src="https://i.ibb.co/3BbZvtQ/pexels-andrea-piacquadio-3757055-removebg-preview-1.png" alt="sofa-3" />
        <div class="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
          <div>
            <p class="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">Two Seater Sofa</p>
          </div>
          <div>
            <p class="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white"></p>
          </div>
        </div>
        <div class="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
          <button class="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
          <button class="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
        </div>
        <div class="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15 13H13V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V13H9C8.73479 13 8.48043 12.8946 8.2929 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.2929 11.2929C8.48043 11.1054 8.73479 11 9 11H11V9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9V11H15C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071C15.5196 12.8946 15.2652 13 15 13Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor" />
              <path d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C11.8684 21.0008 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.23C1.99866 7.84443 2.54536 6.51482 3.51999 5.53C4.50226 4.55051 5.83283 4.00047 7.21999 4.00047C8.60716 4.00047 9.93773 4.55051 10.92 5.53L12 6.61L13.08 5.53C14.0623 4.55051 15.3928 4.00047 16.78 4.00047C18.1672 4.00047 19.4977 4.55051 20.48 5.53C21.4546 6.51482 22.0013 7.84443 22.0013 9.23C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0008 12 21Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      <div class="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
        <img class="group-hover:opacity-60 transition duration-500" src="https://i.ibb.co/DgFfGcm/paul-weaver-n-Wid-MEQsn-AQ-unsplash-removebg-preview-1.png" alt="sofa-4" />
        <div class="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
          <div>
            <p class="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">Sectional Sofa</p>
          </div>
          <div>
            <p class="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white"></p>
          </div>
        </div>
        <div class="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
          <button class="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
          <button class="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
        </div>
        <div class="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15 13H13V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V13H9C8.73479 13 8.48043 12.8946 8.2929 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.2929 11.2929C8.48043 11.1054 8.73479 11 9 11H11V9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9V11H15C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071C15.5196 12.8946 15.2652 13 15 13Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor" />
              <path d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C11.8684 21.0008 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.23C1.99866 7.84443 2.54536 6.51482 3.51999 5.53C4.50226 4.55051 5.83283 4.00047 7.21999 4.00047C8.60716 4.00047 9.93773 4.55051 10.92 5.53L12 6.61L13.08 5.53C14.0623 4.55051 15.3928 4.00047 16.78 4.00047C18.1672 4.00047 19.4977 4.55051 20.48 5.53C21.4546 6.51482 22.0013 7.84443 22.0013 9.23C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0008 12 21Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      <div class="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
        <img class="group-hover:opacity-60 transition duration-500" src="https://i.ibb.co/K6PL38P/pexels-pixabay-276566-removebg-preview-1.png" alt="sofa-5" />
        <div class="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
          <div>
            <p class="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">Sectional Sofa</p>
          </div>
          <div>
            <p class="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white"></p>
          </div>
        </div>
        <div class="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
          <button class="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
          <button class="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
        </div>
        <div class="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15 13H13V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V13H9C8.73479 13 8.48043 12.8946 8.2929 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.2929 11.2929C8.48043 11.1054 8.73479 11 9 11H11V9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9V11H15C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071C15.5196 12.8946 15.2652 13 15 13Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor" />
              <path d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C11.8684 21.0008 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.23C1.99866 7.84443 2.54536 6.51482 3.51999 5.53C4.50226 4.55051 5.83283 4.00047 7.21999 4.00047C8.60716 4.00047 9.93773 4.55051 10.92 5.53L12 6.61L13.08 5.53C14.0623 4.55051 15.3928 4.00047 16.78 4.00047C18.1672 4.00047 19.4977 4.55051 20.48 5.53C21.4546 6.51482 22.0013 7.84443 22.0013 9.23C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0008 12 21Z" fill="currentColor" />
            </svg>
          </button>
        </div>
        <div class="absolute top-4 right-6">
          <p class="text-base leading-4 pb-0.5 text-gray-600 dark:text-white border-b-2 border-gray-600">New</p>
        </div>
      </div>

      <div class="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
        <img class="group-hover:opacity-60 transition duration-500" src="https://i.ibb.co/zP9sWqP/phillip-goldsberry-f-Zule-Efe-A1-Q-unsplash-1-removebg-preview-1.png" alt="sofa-6" />
        <div class="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
          <div>
            <p class="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">Sectional Sofa</p>
          </div>
          <div>
            <p class="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white"></p>
          </div>
        </div>
        <div class="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
          <button class="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
          <button class="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
        </div>
        <div class="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15 13H13V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V13H9C8.73479 13 8.48043 12.8946 8.2929 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.2929 11.2929C8.48043 11.1054 8.73479 11 9 11H11V9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9V11H15C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071C15.5196 12.8946 15.2652 13 15 13Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor" />
              <path d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C11.8684 21.0008 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.23C1.99866 7.84443 2.54536 6.51482 3.51999 5.53C4.50226 4.55051 5.83283 4.00047 7.21999 4.00047C8.60716 4.00047 9.93773 4.55051 10.92 5.53L12 6.61L13.08 5.53C14.0623 4.55051 15.3928 4.00047 16.78 4.00047C18.1672 4.00047 19.4977 4.55051 20.48 5.53C21.4546 6.51482 22.0013 7.84443 22.0013 9.23C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0008 12 21Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      <div class="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
        <img class="group-hover:opacity-60 transition duration-500" src="https://i.ibb.co/SPyYgjw/pexels-martin-p-chy-1866149-removebg-preview-1.png" alt="sofa-7" />
        <div class="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
          <div>
            <p class="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">Sectional Sofa</p>
          </div>
          <div>
            <p class="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white"></p>
          </div>
        </div>
        <div class="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
          <button class="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
          <button class="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5"></button>
        </div>
        <div class="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15 13H13V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V13H9C8.73479 13 8.48043 12.8946 8.2929 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.2929 11.2929C8.48043 11.1054 8.73479 11 9 11H11V9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9V11H15C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071C15.5196 12.8946 15.2652 13 15 13Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor" />
              <path d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z" fill="currentColor" />
            </svg>
          </button>
          <button>
            <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C11.8684 21.0008 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.23C1.99866 7.84443 2.54536 6.51482 3.51999 5.53C4.50226 4.55051 5.83283 4.00047 7.21999 4.00047C8.60716 4.00047 9.93773 4.55051 10.92 5.53L12 6.61L13.08 5.53C14.0623 4.55051 15.3928 4.00047 16.78 4.00047C18.1672 4.00047 19.4977 4.55051 20.48 5.53C21.4546 6.51482 22.0013 7.84443 22.0013 9.23C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0008 12 21Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-end items-end mt-12">
      <div class="flex flex-row items-center justify-center space-x-8">
        <button class="text-base leading-none text-gray-800 dark:text-white border-b-2 border-transparent focus:outline-none focus:border-gray-800">
          <p>1</p>
        </button>
        <button class="text-base leading-none text-gray-800 dark:text-white border-b-2 border-transparent focus:outline-none focus:border-gray-800">
          <p>2</p>
        </button>
        <button class="text-base leading-none text-gray-800 dark:text-white border-b-2 border-transparent focus:outline-none focus:border-gray-800">
          <p>3</p>
        </button>
        <button class="flex justify-center items-center">
          <svg class="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </div>

</div>
        {/* <!-- component -->/ */}
<div class="2xl:container 2xl:mx-auto">
  {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}

  <div class="lg:px-20 md:px-6 px-4 md:py-12 py-8">
    <div>
      <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50">Top Selling</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">
      <div class="bg-gray-50 dark:bg-gray-800 p-8">
        <div class="">
          <h2 class="text-xl text-gray-600 dark:text-white">Lounge Chair</h2>
          <p class="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
        </div>
        <div class="flex justify-center items-center mt-8 md:mt-24">
          <img class="" src="https://i.ibb.co/8403ZFZ/pexels-hormel-2762247-removebg-preview-2-1.png" alt="A chair with designed back" role="img" />
        </div>
        <div class="flex justify-end items-center space-x-2 mt-16 md:mt-32">
          <button aria-label="show in red color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="4.75" fill="#DC2626" stroke="#6B7280" stroke-width="0.5" />
            </svg>
          </button>
          <button aria-label="show in white color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="4.75" fill="white" stroke="#6B7280" stroke-width="0.5" />
            </svg>
          </button>
          <button aria-label="show in black color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" stroke-width="0.5" />
            </svg>
          </button>
        </div>
      </div>
      <div class="bg-gray-50 dark:bg-gray-800 p-8">
        <div class="">
          <h2 class="text-xl text-gray-600 dark:text-white">Lounge Chair</h2>
          <p class="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
        </div>
        <div class="flex justify-center items-center mt-8 md:mt-24">
          <img class="" src="https://i.ibb.co/WBdnRqb/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-2-1.png" alt="A chair with wooden legs" role="img" />
        </div>
        <div class="flex justify-end items-center space-x-2 mt-8 md:mt-24">
          <button aria-label="show in white color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="4.75" fill="white" stroke="#6B7280" stroke-width="0.5" />
            </svg>
          </button>
          <button aria-label="show in black color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" stroke-width="0.5" />
            </svg>
          </button>
        </div>
      </div>
      <div class="bg-gray-50 dark:bg-gray-800 p-8">
        <div class="">
          <h2 class="text-xl text-gray-600 dark:text-white">Lounge Chair</h2>
          <p class="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
        </div>
        <div class="flex justify-center items-center mt-8 md:mt-24">
          <img class="" src="https://i.ibb.co/R2fbCvj/kari-shea-It-Mgg-D0-Egu-Y-unsplash-removebg-preview-2-1.png" alt="A sofa chair with wooden legs" role="img" />
        </div>
        <div class="flex justify-end items-center space-x-2 mt-16 md:mt-32">
          <button aria-label="show in green color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="4.75" fill="#047857" stroke="#6B7280" stroke-width="0.5" />
            </svg>
          </button>
          <button aria-label="show in brown color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="4.75" fill="#92400E" stroke="#6B7280" stroke-width="0.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8">
      <div class="bg-gray-50 dark:bg-gray-800 p-8">
        <div>
          <h2 class="text-xl leading-tight text-gray-600 dark:text-white">Sectional Sofa</h2>
          <p class="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
        </div>
        <div class="flex justify-center items-center mt-28 md:mt-3">
          <img src="https://i.ibb.co/CPdBFwZ/pexels-pixabay-276583-removebg-preview-1-1.png" alt="A large sectional sofa" role="img" />
        </div>
        <div class="flex justify-end items-center space-x-2 mt-36 md:mt-12">
          <button aria-label="show in yellow color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="4.75" fill="#F59E0B" stroke="#6B7280" stroke-width="0.5" />
            </svg>
          </button>
          <button aria-label="show in light gray color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="4.75" fill="#9CA3AF" stroke="#6B7280" stroke-width="0.5" />
            </svg>
          </button>
        </div>
      </div>
      <div class="bg-gray-50 dark:bg-gray-800 p-8">
        <div>
          <h2 class="text-xl leading-tight text-gray-600 dark:text-white">Two Seater Sofa</h2>
          <p class="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
        </div>
        <div class="flex justify-center items-center mt-28 md:mt-1">
          <img src="https://i.ibb.co/238nZzf/pexels-andrea-piacquadio-3757055-removebg-preview-1-1.png" alt="A beautiful two seater sofa" role="img" />
        </div>
        <div class="flex justify-end items-center space-x-2 mt-36 md:mt-12">
          <button aria-label="show in black color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" stroke-width="0.5" />
            </svg>
          </button>
          {/* <button aria-label="show in green color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="4.75" fill="#047857" stroke="#6B7280" stroke-width="0.5" />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- component --> */}
<div class="flex justify-center items-center">
  {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
  <div class="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
    <div class="flex flex-col jusitfy-center items-center space-y-10">
      <div class="flex flex-col justify-center items-center ">
        <h1 class="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">Shop By Category</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
        <div class="relative group flex justify-center items-center h-full w-full">
          <img class="object-center object-cover h-full w-full" src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" alt="girl-image" />
          <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Women</button>
          <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
        </div>

        <div class="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
          <div class="relative group flex justify-center items-center h-full w-full">
            <img class="object-center object-cover h-full w-full" src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="shoe-image" />
            <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Shoes</button>
            <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
          </div>
          <div class="relative group flex justify-center items-center h-full w-full">
            <img class="object-center object-cover h-full w-full" src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png" alt="watch-image" />
            <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Watches</button>
            <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
          </div>
        </div>

        <div class="relative group justify-center items-center h-full w-full hidden lg:flex">
          <img class="object-center object-cover h-full w-full" src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="girl-image" />
          <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Accessories</button>
          <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
        </div>
        <div class="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
          <img class="object-center object-cover h-full w-full hidden md:block" src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png" alt="girl-image" />
          <img class="object-center object-cover h-full w-full md:hidden" src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
          <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Accessories</button>
          <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
        </div>
      </div>
      <div class="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
        <img class="object-center object-cover h-full w-full hidden md:block" src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png" alt="girl-image" />
        <img class="object-center object-cover h-full w-full sm:hidden" src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
        <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Accessories</button>
        <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Product