import { TextField } from '@mui/material';

const ExternalFilter = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}) => (
  <TextField
    id='outlined-basic'
    label='Search by Name, Population, Language, or Currency'
    placeholder='Ex: United Kindom'
    variant='outlined'
    size='small'
    color='primary'
    focused={true}
    value={searchTerm}
    onChange={e => setSearchTerm(e.target.value)}
    sx={{ width: '350px', marginRight: '30px' }}
  />
);

export default ExternalFilter;
