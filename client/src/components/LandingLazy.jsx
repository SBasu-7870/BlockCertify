import React, {Suspense} from 'react'
import LoadingScreen from './LoadingScreen';

const NewLanding = React.lazy(()=> import('../pages/Landing'));

function LandingLazy() {
  return (
    <Suspense fallback={<LoadingScreen/>}>
        <NewLanding/>
    </Suspense>
  )
}

export default LandingLazy