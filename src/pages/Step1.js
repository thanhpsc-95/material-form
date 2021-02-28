import { CustomButton } from "../components/Button";
import { CustomForm } from "../components/Form";
import { Input } from "../components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { MainContainer } from "../components/MainContainer";
import { Typography } from "@material-ui/core";
import { Fab } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const Step1 = ({ ...props }) => {
  const history = useHistory();
  const yupSchema = yup.object().shape({
    firstName: yup
      .string()
      .matches(/^([^0-9]*)$/, "Họ không chứa số")
      .required("Họ là bắt buộc")
      .min(3, "Ít nhất 3 ký tự")
      .max(50, "Tối da 50 ký tự"),
    lastName: yup
      .string()
      .matches(/^([^0-9]*)$/, "Tên không chứa số")
      .required("Tên là bắt buộc")
      .min(3, "Ít nhất 3 ký tự")
      .max(50, "Tối da 50 ký tự"),
    email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Email là bắt buộc")
      .min(3, "Ít nhất 3 ký tự")
      .max(50, "Tối da 50 ký tự"),
    password: yup
      .string()
      .required("Mật khẩu là bắt buộc")
      .min(6, "Tối thiểu 6 ký tự")
  });

  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(yupSchema)
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    history.push("step2");
  };
  return (
    <MainContainer {...props}>
      <Typography component="header">
        <Fab
          variant="extended"
          style={{ backgroundColor: "deeppink", color: "white" }}
        >
          Bước 1
        </Fab>
      </Typography>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="firstName"
          defaultValue=""
          label="Họ"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
          inputRef={register}
          required
        ></Input>
        <Input
          name="lastName"
          defaultValue=""
          label="Tên"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
          inputRef={register}
          required
        ></Input>
        <Input
          name="email"
          defaultValue=""
          label="Email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          inputRef={register}
          required
        ></Input>
        <Input
          type="password"
          name="password"
          defaultValue=""
          label="Mật khẩu"
          error={!!errors.password}
          helperText={errors?.password?.message}
          inputRef={register}
          required
        ></Input>
        <Input
          name="description"
          defaultValue=""
          label="Mô tả"
          inputRef={register}
        ></Input>
        <CustomButton type={"submit"} color="secondary">
          Tiếp theo
        </CustomButton>
      </CustomForm>
    </MainContainer>
  );
};
