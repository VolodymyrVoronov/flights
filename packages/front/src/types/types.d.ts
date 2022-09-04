interface IFiltersData {
  id: number;
  title: string;
  checked: boolean;
}

interface ITabsFilterData {
  id: number;
  text: string;
  checked: boolean;
}

interface ISegment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

interface ITicket {
  price: number;
  carrier: string;
  segments: ISegment[];
}
