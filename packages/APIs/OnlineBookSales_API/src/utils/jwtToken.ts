// Create Token and saving in cookie

export const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();
  
    // options for cookie
    const options = {
      expires: new Date(Date.now() + Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    
  
    res.status(statusCode).cookie("token", token).json({
      success: true,
      user,
      token,
    });
  };
  
