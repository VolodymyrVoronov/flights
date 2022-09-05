interface IFiltersData {
  id: number;
  title: string;
  checked: boolean;
  type: string;
}

interface ITabsFilterData {
  id: number;
  text: string;
  checked: boolean;
  type: string;
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
