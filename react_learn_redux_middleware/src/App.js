import CounterContainer from "./containers/CounterContainer";
// import PostListContainer from "./container/PostListContainer";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <CounterContainer />    
      {/* <PostListContainer /> */}
      <Routes>
        <Route path="/" element={<PostListPage />} >
          <Route path=":id" element={<PostPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
