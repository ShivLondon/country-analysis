import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function CountryDetails({
  open,
  setOpen,
  countryDetails,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  countryDetails: any;
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        maxWidth='lg'
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'>
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              {countryDetails?.name?.common}
            </Typography>
          </Toolbar>
        </AppBar>
        <List sx={{ width: '500px' }}>
          {Object.keys(countryDetails).map((key: string, index: number) => {
            return (
              <div key={index + key}>
                {typeof countryDetails[key] !== 'object' ? (
                  <div>
                    <ListItemButton>
                      <ListItemText
                        primary={key.toUpperCase()}
                        secondary={countryDetails[key].toString()}
                      />
                    </ListItemButton>
                    <Divider />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </List>
      </Dialog>
    </React.Fragment>
  );
}
