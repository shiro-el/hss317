import NextLink from 'next/link';
import { Link } from '@nextui-org/react';

interface Props {
  date: string;
  category?: string;
}

function DateAndCategoryLink({ date, category }: Props) {
  return (
    <>
      {date}
    </>
  );
}

export default DateAndCategoryLink;
