import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  RightCol,
  SwitchView,
  TotalTitle,
  TotalValue,
  TotalWrapper,
  ViewName,
  VisibleDuration,
} from './time-summary.styles';
import { RootState } from '@/app/state/store';
import moment from 'moment';

const TimeSummary = () => {
  const dailyTotal = useSelector((state: RootState) => state.dailyTotal.value);
  const weeklyTotal = useSelector((state: RootState) => state.weeklyTotal.value);

  return (
    <Container>
      <VisibleDuration>THIS WEEK</VisibleDuration>
      <RightCol>
        <TotalWrapper>
          <TotalTitle>TODAY TOTAL</TotalTitle>
          <TotalValue>{moment.utc(dailyTotal).format('HH:mm:ss')}</TotalValue>
        </TotalWrapper>
        <TotalWrapper>
          <TotalTitle>WEEK TOTAL</TotalTitle>
          <TotalValue>{moment.utc(weeklyTotal).format('HH:mm:ss')}</TotalValue>
        </TotalWrapper>
        <SwitchView>
          <ViewName>LIST VIEW</ViewName>
          <svg
            color="#2C1338"
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="8"
            viewBox="0 0 5 8"
            transform="rotate(-90)"
          >
            <path d="M2.414 4l2.293 2.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414L2.414 4z"></path>
          </svg>
        </SwitchView>
      </RightCol>
    </Container>
  );
};

export default TimeSummary;
