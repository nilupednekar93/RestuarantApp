import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header, MainContainer, CreateContainer } from './Components'
import { useStateValues } from './Context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { actionType } from './Context/reducer';

const App = () => {

  const [{ foodItems }, dispatch] = useStateValues();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      })
    })
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header />

        <main className='mt-14 md:mt-20 px-4 md md:px-16 py-4 w-full'>
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />

          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App