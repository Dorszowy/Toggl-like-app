import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import DayDivider from './day-divider/day-divider';
import TrackedTask from './tracked-task/tracked-task';
import { Container, SingleDayWrapper } from './tracked-tasks-list.styles';
import { RootState } from '@/app/state/store';

const TrackedTasksList = () => {
  const entryList = useSelector((state: RootState) => state.timeEntryList.timeEntryList);
  const entryListCopy = entryList.slice();

  const entryListSortedByDate = entryListCopy.sort((a, b) => {
    return new Date(b.startTime).valueOf() - new Date(a.startTime).valueOf();
  });

  const groupByDay = _.groupBy(entryListSortedByDate, ({ dayToGroupBy }) => dayToGroupBy);

  const groupedEntries = Object.entries(groupByDay).map(([date, items]) => ({
    date,
    items,
    totalDuration: items?.reduce((total, item) => total + item.duration, 0) ?? 0,
  }));

  return (
    <Container>
      {groupedEntries.map(({ date, items, totalDuration }) => (
        <SingleDayWrapper key={date}>
          <DayDivider date={date} totalDuration={totalDuration} />
          {items?.map((item) => (
            <TrackedTask
              key={item.id}
              item={item}
              startTime={item.startTime.format('h:mm A')}
              endTime={item.endTime.format('h:mm A')}
            />
          ))}
        </SingleDayWrapper>
      ))}
    </Container>
  );
};

export default TrackedTasksList;
