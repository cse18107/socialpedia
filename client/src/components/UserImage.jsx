import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        src={`https://socialpedia-d286.onrender.com/assets/${image}`}
        alt="userimage"
      />
    </Box>
  );
};

export default UserImage;
