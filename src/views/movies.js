import React, {useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Container, Typography, TextField } from '@mui/material';
import NavBar from '../component/navBar';
import axios from 'axios'


const Movies = () => {

    const [movies, setMovies] = useState([])
    const [movies1, setMovies1] = useState([])
    const [search, setSearch] = useState('action')
 useEffect(()=>{
     axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=a20d9cd6&s=${search}&type=movie`)
     .then(({data})=> {
         setMovies(data.Search)
     })
     .catch((err)=>{
         console.log(err)
     })
 }, [search])

 useEffect(()=>{
    axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=a20d9cd6&s=${'titanic'}&type=movie`)
    .then(({data})=> {
        setMovies1(data.Search)
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
},[])
  
  return (
      <>
    <Box
      overflow='hidden'
      sx={{
        backgroundImage:
          'url(https://images.pexels.com/photos/1649683/pexels-photo-1649683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        background: 'cover no-repeat',
        height: '100vh',
        width: '100%',
      }}
    >
    <Box
        sx={{
          backgroundColor: 'rgba(0,0,0, 0.5)',
          width: '100vw',
          height: '100vh',
          alignContent: 'center',
          margin: 'auto',
        }}
      >
      <NavBar />
      
      <Box sx={{
            width: '80%',
            marginX: 'auto',
            display: 'block', 
            flexDirection: 'column',
            marginTop: 'calc(100vh / 5)'
            }}>
        
          <Typography variant={'h2'} sx={{ color: 'white', fontWeight: '800', textAlign: 'center', zIndex: 1, my: 3, width: { md: '10%', xs: '80%'}, marginX: { md: 0,  xs: '10%'}, fontSize: {xl: '4rem', lg: '4rem', md: '3rem', xs:'3.5rem'} }}>Watch something incredible.</Typography>
        
      </Box>
    </Box>
    </Box>
    <Container sx={{my: 5}}>
        <Typography>Search</Typography>
        <TextField 
            type={'text'}
            fullWidth
            onChange={(e) => setSearch(e.target.value)}
        />
    </Container>
    <Box>
        <Box sx={{width: '80%', margin: 'auto'}} >
            <Typography sx={{marginY: 3}}>Action Movies</Typography>
        </Box>
    
    <Container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              overflow: 'auto',
              width: '80%',
              margin: 'auto',
              alignItems: 'center',
            }}
          >
            {movies && movies.map((movie, i) => (
                
                <Box key={i}
                sx={{
                    mr: 5,
                    mb:5,
                    minWidth: {
                        xl: 300,
                        lg: 280,
                        md: 250,
                        sm: 250,
                        xs: 230,
                      },
                    height: 400,
                    width: '30%',
                    overflow: 'hidden',
                    position: 'relative',
                    
                  }}
                >
                    <Typography sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: 10, fontWeight: 800}}>{movie.Title}</Typography>
                   
                    <Box 
                        component={'img'}
                        src={movie.Poster}
                        sx={{ 
                            height: '100%',
                            width: '100%',
                        }}
                    />
                    <Box
                        sx={{
                        backgroundColor: 'rgba(0,0,0, 0.4)',
                        width: '100vw',
                        height: '100vh',
                        alignContent: 'center',
                        position: 'relative',
                        transform: 'translate(-50%, -50%)',

                        }}
                    />
                </Box>
            ))}
          </Container>
          </Box>
          <Box>
        <Box sx={{width: '80%', margin: 'auto'}} >
            <Typography sx={{marginY: 3}}>Romantic Movie</Typography>
        </Box>
    
    <Container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              overflow: 'auto',
              width: '80%',
              margin: 'auto',
              alignItems: 'center'
            }}
          >
            {movies1 && movies1.map((movie, i) => (
                
                <Box key={i}
                sx={{
                    mr: 5,
                    mb:5,
                    minWidth: {
                        xl: 300,
                        lg: 280,
                        md: 250,
                        sm: 250,
                        xs: 230,
                      },
                    height: 400,
                    width: '30%',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                    <Typography sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: 10, fontWeight: 800}}>{movie.Title}</Typography>
                    <Box 
                        component={'img'}
                        src={movie.Poster}
                        sx={{ 
                            height: '100%',
                            width: '100%',
                            
                        }}
                    />
                    <Box
                        sx={{
                        backgroundColor: 'rgba(0,0,0, 0.4)',
                        width: '100vw',
                        height: '100vh',
                        alignContent: 'center',
                        position: 'relative',
                        transform: 'translate(-50%, -50%)',

                        }}
                    />
                </Box>
            ))}
          </Container>
          </Box>
    </>
    

  )
}

export default Movies;