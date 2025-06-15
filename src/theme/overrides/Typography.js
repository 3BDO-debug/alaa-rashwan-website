// ----------------------------------------------------------------------

export default function Typography(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: theme.palette.text.primary, // Example color for h1
        },
        h2: {
          color: theme.palette.text.primary, // Example color for h2
        },
        h3: {
          color: theme.palette.text.primary, // Example color for h3
        },
        h4: {
          color: theme.palette.text.primary, // Example color for h4
        },
        h5: {
          color: theme.palette.text.primary, // Example color for h5
        },
        h6: {
          color: theme.palette.text.primary, // Example color for h6
        },
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}
