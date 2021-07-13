import React from 'react';
import CharacterCard from './CharacterCard';

const AvatarContainer = ({characters}) => {
    return (
        <div>
            <ul id="character-container">
            {
            characters.map(character => (
            <CharacterCard 
            key = {character.id}
            character={character}
            />
            ))
            }
            </ul>
        </div>
    );
}

export default AvatarContainer;
