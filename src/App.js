import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';
import './App.css';

const projectID="be257d6b-0bd7-4822-9436-f9f3923603f2"
function App() {
  
  if (!localStorage.getItem('username')) return <LoginForm />;
  function logout(){
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    window.location.reload();
  }

  return (
    <>
    
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    <button onClick={logout}style ={{cursor:"pointer" ,width :"75px",height:"50px",border:"2px solid ",borderRadius:"30px 30px 5px 30px",marginLeft:"10px", backgroundColor:"grey", position:"sticky" , bottom:"200px"}}>Logout</button>
    </>
  );
}

export default App;
