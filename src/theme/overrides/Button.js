// ----------------------------------------------------------------------

export default function Button(theme, mode) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
        },
        containedPrimary: {
          boxShadow: theme.customShadows.primary,
          backgroundColor: theme.palette.primary.main,
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
          color: theme.palette.secondary.main,
        },
        containedInfo: {
          boxShadow: theme.customShadows.info,
        },
        containedSuccess: {
          boxShadow: theme.customShadows.success,
        },
        containedWarning: {
          boxShadow: theme.customShadows.warning,
        },
        containedError: {
          boxShadow: theme.customShadows.error,
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        outlinedPrimary: {
          color: theme.palette.text.primary,
          borderColor:
            mode === "light"
              ? theme.palette.primary.main
              : theme.palette.grey[600],
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
