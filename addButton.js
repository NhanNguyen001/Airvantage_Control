import React from 'react';
import { Link } from 'react-router';
import addInfo from './addInfo';

const addButton = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        name: '',
        job: '',
        born: '',
        education: ''
    });

    class addButton extends Component {
        state = {
            info: {
                name: Barack,
                job: President,
                born: '1961',
                education: Harvard,
            }
        }

        // Redirect if clicked
        if(isAuthenticated) {
            return <Redirect to="/addinfo" />
        }

        render() {
            return (
                <div>
                    <addInfo />
                </div>
            );
        }
    }

    export default addButton;