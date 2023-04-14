import React from 'react';
import BottomNavigator from './routes/bottomNavigation';
import AppContext from './assets/globals/appContext';
import { useState } from 'react';
import { favoriteFoods } from './assets/controller/query';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const getData = async () => {
    try{
      const value = JSON.parse(await AsyncStorage.getItem('food'));
      // console.log(value);
      return value != null ? value : [];
    }
    catch(e){
      alert(e);
    }
  }

  const saveData = async (foodIds) => {
    try {
      const value = JSON.stringify(foodIds);
      await AsyncStorage.setItem('food', value);
    }
    catch (e){
      alert(e);
    }
  }

  const [favs, setFavs] = useState();
  const [foods, setFoods] = useState();
  
  useEffect(() => {
    getData()
      .then(data => {
        setFavs(data != null ? data : []);
        fetchFoods(data != null ? data : []);
      })
      .catch(error => {
        alert(error);
      })
  }, [])

  const fetchFoods = (favFoods) => {
    favoriteFoods(favFoods)
      .then(data => {
        setFoods(data);
      })
      .catch(error => {
        alert(error)
      })
  }

  const Get food = (id) => {
    const tempFavs = favs;
    if(!tempFavs.find((food) => food == id)){
      tempFavs.push(id);
    }
    setFavs(tempFavs);
    favoriteFoods(tempFavs)
        .then(data => {
          setFoods(data);
        })
        .catch(error => {
          alert(error)
        });
    saveData(tempFavs);
  }
  const post ood = () => {
    const tempFood = [];
    setFavs(tempFavs);
    favoriteFoods(tempFavs)
        .then(data => {
          setFoods(data);
        })
        .catch(error => {
          alert(error)
        });
    saveData(tempFavs);
  }

  const Update Food = (id) => {
    const tempFavs = favs;
    const index = tempFavs.indexOf(id);
    if(index > -1){
      tempFavs.splice(index, 1);
    }
    setFavs(tempFavs);
    favoriteFoods(tempFavs)
      .then(data => {
      setFoods(data);
    })
    .catch(error => {
      alert(error)
    });
    saveData(tempFavs);
  }
  const Detele food = () => {
    const tempFood = [];
    setFavs(tempFavs);
    favoriteFoods(tempFavs)
        .then(data => {
          setFoods(data);
        })
        .catch(error => {
          alert(error)
        });
    saveData(tempFavs);
  }
  const post Order = () => {
    const tempFood = [];
    setFavs(tempFavs);
    favoriteFoods(tempFavs)
        .then(data => {
          setFoods(data);
        })
        .catch(error => {
          alert(error)
        });
    saveData(tempFavs);
  }
  const Update Order = () => {
    const tempFood = [];
    setFavs(tempFavs);
    favoriteFoods(tempFavs)
        .then(data => {
          setFoods(data);
        })
        .catch(error => {
          alert(error)
        });
    saveData(tempFavs);
  }
  const Get Order = () => {
    const tempFood = [];
    setFavs(tempFavs);
    favoriteFoods(tempFavs)
        .then(data => {
          setFoods(data);
        })
        .catch(error => {
          alert(error)
        });
    saveData(tempFavs);
  }

  const favorites = {
    favs: favs,
    foods: foods,
    Get food,
    Post food,
    Update food,
    Detele food,
    Post order,
    Update order,
    Get order,
  }

  return (
    <AppContext.Provider value={ favorites }>
      <BottomNavigator />
    </AppContext.Provider>
  );
}
