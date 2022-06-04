import fetcher from "./fetcher";

export default auth = (
  mode: "signin" | "singup",
  body: { email: string; password: string }
) => {
  return fetcher(`/${mode}`, body);
};
