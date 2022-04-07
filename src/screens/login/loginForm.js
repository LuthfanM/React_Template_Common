import * as Yup from "yup";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
import { Icon } from "@iconify/react";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Typography,
  InputBase,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { InputBaseStyle } from "./styles";

import { useDispatch } from "react-redux";
import { loginStateChanged } from "../../helpers/redux/features/authSlice";

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "bansns",
      password: "asss",
      remember: false,
    },
    // validationSchema: LoginSchema,
    mapPropsToValues: (props) => {
      return {
        email: props.email || '',
        password: props.password || ''
      }
    },
    onSubmit: (values) => {
      console.log("val"+JSON.stringify(values))
      dispatch(loginStateChanged({
        values
      }));
      navigate("/dashboard/app", { replace: true });
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {/* {console.log("no log si")} */}
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label={
              <Typography
                sx={{ fontWeight: "light", color: "custom.blackCustom" }}
              >
                admin
              </Typography>
            }
            {...getFieldProps("email")}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            label={
              <Typography
                sx={{ fontWeight: "light", color: "custom.blackCustom" }}
              >
                password
              </Typography>
            }
            {...getFieldProps("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          {/* <InputBaseStyle variant="outlined" placeholder="admin" fullWidth />

          <InputBaseStyle variant="outlined" placeholder="password" fullWidth /> */}
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                {...getFieldProps("remember")}
                checked={values.remember}
                sx={{
                  color: "#070c80",
                  "&.Mui-checked": {
                    color: "#070c80",
                  },
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: "medium",
                  color: "custom.greyBlackCustom",
                }}
              >
                Remember Me
              </Typography>
            }
          />

          <Link
            component={RouterLink}
            variant="subtitle2"
            to="#"
            sx={{
              color: "custom.greyBlackCustom",
              textDecoration: "none",
              fontWeight: "medium",
              fontSize: 15,
            }}
          >
            Forgot Password
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
