const getState = ({ getStore, getActions, setStore }) => {
  return ({
    store: {
      planets: [],
      people: [],
      starships: [],
      species:[],
      films: [],
      favorites: []
    },
    actions: {
      getStarwars: async (resource)=>{
       
        let resp = await fetch("https://www.swapi.tech/api/" + resource)
        if (!resp.ok){
          console.error(resp.status + ": " + resp.statusText)
          return
        }
        let data = await resp.json()
        let newStore = {...getStore()}
        newStore[resource]=data.results || data.result
        setStore(newStore
        )
      },
      getStarwarsDetail: async(resource, id)=>{
         let resp =await fetch(`https://www.swapi.tech/api/${resource}/${id}`)
         if(!resp.ok){
          console.error(`Error: ${resp.status}: ${resp.statusText}`)
         }
         let data=await resp.json()
         return {...data.result.properties}
        },
      handleFavorites:(data)=> {
      
        let currentStore = getStore()
        let favoriteIndex= currentStore.favorites.findIndex(
          (fav)=>fav.link==data.link)
        if(favoriteIndex == -1){
          setStore({
            ...currentStore,
            favorites: [...currentStore.favorites, data]
          })
          
        }else{
          let newFavorites = [...currentStore.favorites]
          newFavorites.splice(favoriteIndex,1)
          setStore({
            currentStore,
            favorites: newFavorites
          })
        }
        
      },
     
     /* getPlanets: async () => {
        let resp = await fetch("https://www.swapi.tech/api/planets");
        let data = await resp.json();
        setStore({
          ...getStore(),
          planets: data.results,
        });
      },*/
  
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index)
            elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  });
};

export default getState;
