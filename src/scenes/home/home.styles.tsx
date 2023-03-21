import {Dimensions, StyleSheet, StyleSheetProperties} from 'react-native';
const {height} = Dimensions.get('window');
export default StyleSheet.create<StyleSheetProperties | any>({
  btnBack: {
    width: 40,
    height: 40,
  },
  container: {
    backgroundColor: '#FFFFFF',
  },
  tierInfoContainer: {
    backgroundColor: '#171725',
    padding: 24,
    height: 428,
    marginTop: 30,
    zIndex: 10,
  },
  tierTitle: {
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 40,
    color: '#FFFFFF',
  },
  tierContent: {
    marginTop: 16,
  },
  tierText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#B5B5BE',
  },
  balanceContainer: {
    height: 416,
    borderRadius: 8,
    shadowColor: '#171725',
    shadowOffset: {
      width: 1,
      height: 12,
    },
    shadowRadius: 8,
    shadowOpacity: 0.04,
    backgroundColor: '#fff',
    marginTop: 40,
    padding: 24,
  },
  balanceTitle: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 24,
    color: '#B5B5BE',
  },
  numBalance: {
    fontSize: 40,
    fontWeight: '400',
    lineHeight: 56,
    color: '#171725',
  },
  progressBar: {
    marginTop: 33,
  },
  subTitleBalance: {
    marginTop: 34,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#92929D',
  },
  btnBenefitView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  btnBenefitTitle: {
    color: '#0062FF',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
  btnBenefitContainer: {
    width: '50%',
  },
  btnMyCoupons: {
    backgroundColor: '#171725',
    borderRadius: 4,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  couponText: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  updateStyle: {
    textAlign: 'center',
    marginTop: 16,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#B5B5BE',
  },
  listTitle: (isSecond: boolean) => ({
    fontWeight: '600',
    fontSize: 18,
    color: '#171725',
    paddingLeft: 16,
    marginTop: isSecond ? 24 : 0,
  }),

  listDataContainer: (y: number) => ({
    marginTop: y ? y + 20 : 200,
    backgroundColor: '#FFFFFF',
  }),

  scrollViewStyle: {
    flexGrow: 1,
    paddingBottom: 41,
  },

  containerStyle: {
    paddingLeft: 16,
    paddingBottom: 32,
  },
  dataContainer: {
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    backgroundColor: '#171725',
    height: height / 2,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  flatListStyle: {
    marginTop: 26,
  },
});
