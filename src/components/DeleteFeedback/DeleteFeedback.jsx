import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';

const DeleteFeedback = ({feedback, fetchFeedback}) => {
    const handleDeleteAll = () => {
        const choice = window.confirm(
            "Are you sure you want to delete feedback?"
        )
        if (choice) {
            console.log('DELETE CONFIRMED');
            confirmDelete(feedback);
        }
    }

    const confirmDelete = (feedback) => {
        const id = feedback.id;

        //AXIOS DELETE request - remove feedback
        axios({
            method: 'DELETE',
            url: `/feedback/${id}`,
            data: id
        })
        .then((response) => {
            console.log('response from DELETE request: ', response);
            fetchFeedback();
        })
    }

    return (
        <Stack>
            <Button 
                variant="outlined" 
                type="submit"
                className="nextButton"
                onClick={handleDeleteAll}>Delete
            </Button>
        </Stack>
    )
}

export default DeleteFeedback;