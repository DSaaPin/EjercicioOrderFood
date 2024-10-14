import React from 'react';

const Food = ({icon, name}) => {

return (
    <button>
        {icon}  {name}
    </button>
);
};

export default Food;