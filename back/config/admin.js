module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f37d67f16f98ec05deb6b9c6fb24dd39'),
  },
});
