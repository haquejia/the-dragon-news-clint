import React from 'react';
import { Link } from 'react-router-dom';


const Terms = () => {
    return (
        <div>
            <h2>terms and conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero officiis perferendis sunt, accusamus doloribus id, nostrum hic sit repellat quos sapiente earum natus debitis, itaque autem vel odio aliquam soluta.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;