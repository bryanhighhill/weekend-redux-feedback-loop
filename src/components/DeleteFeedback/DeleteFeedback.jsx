import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const DeleteFeedback = () => {
    const handleDeleteAll = () => {
        const choice = window.confirm(
            "Are you sure you want to delete feedback?"
        )
        if (choice) {
            console.log('DELETE CONFIRMED');
        }
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