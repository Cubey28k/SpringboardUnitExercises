function App() {
    return (
    <div>
        <Tweet 
        name = "Jimmy Boy"
        username="Jb123"
        date={new Date().toDateString()}
        message="That was not buffalo sauce."
        />
        <Tweet 
        name = "Butter Boy"
        username="Bboy123"
        date={new Date().toDateString()}
        message="I CAN believe it's not butter."
        />
        <Tweet 
        name = "Jurassic fizzle"
        username="J5Alive"
        date={new Date().toDateString()}
        message="Add water to foam and get me on the microphone."
        />
        <Tweet 
        name = "Fantana"
        username="Guywhotweetsstuff"
        date={new Date().toDateString()}
        message="Neat"
        />
    </div>
    );
}