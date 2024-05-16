const MAX_NAME_LENGTH_TO_SHOW = 6;

function Person({name, age, hobbies}) {
    const voteText = age >= 18 ? "Go and vote" : "Can't vote";

    const hobbiesLI = hobbies.map(hobby => <li>{hobby}</li>)

    return (
        <div>
            <p>Learn something new about this person:</p>
            <ul>
                <li>Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
                <li>Age: {age}</li>
                <ul>
                    Hobbies:
                    {hobbiesLI}
                </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    );
}