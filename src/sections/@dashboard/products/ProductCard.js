import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/Label';
import { ColorPreview } from '../../../components/color-utils';
import seatIcon from '../../../assets/icons/seat-person.png'
import gasIcon from '../../../assets/icons/gas.png'
import timerIcon from '../../../assets/icons/timer.png'
import wheelIcon from '../../../assets/icons/wheel.png'

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { name, cover, price, colors, status, priceSale } = product;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <ProductImgStyle alt={name} src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Grid container spacing={1}>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box component={"img"} src={seatIcon} alt="seat icon" sx={{ width: '28px', height: '28px', marginRight: '7px' }} />
            <Typography component={"p"} sx={{ fontSize: '14px' }}>4 Chỗ</Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box component={"img"} src={gasIcon} alt="gas icon" sx={{
              width: '24px', height: '24px', marginRight: '7px'
            }} />
            <Typography component={"p"} sx={{ fontSize: '14px' }}>Xăng</Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box component={"img"} src={timerIcon} alt="timer icon" sx={{
              width: '24px', height: '24px', marginRight: '7px'
            }} />
            <Typography component={"p"} sx={{ fontSize: '14px' }}>6.1km / lít</Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box component={"img"} src={wheelIcon} alt="wheel icon" sx={{
              width: '24px', height: '24px', marginRight: '7px'
            }} />
            <Typography component={"p"} sx={{ fontSize: '14px' }}>Tự động</Typography>
          </Grid>
        </Grid>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <ColorPreview colors={colors} />
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {priceSale && fCurrency(priceSale)}
            </Typography>
            &nbsp;
            {fCurrency(price)}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
