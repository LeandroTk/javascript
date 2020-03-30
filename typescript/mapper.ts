type PersonAPI = {
  id: number,
  name: string,
  lastname?: string,
  email: string,
  status: string,
  lastVisit: Date
};

type Person = {
  id: number,
  name: string,
  email: string,
  active: boolean
};

enum PersonStatus {
  Active = 'active',
  Inactive = 'inactive'
};

const buildPersonName = (person: PersonAPI): string =>
  person.lastname
    ? `${person.name} ${person.lastname}`
    : person.name;

const isActive = (person: PersonAPI): boolean => {
  const oneDayMilliseconds: number = 24 * 3600 * 1000;
  const sevenDaysMilliseconds: number = oneDayMilliseconds * 7;
  const weekAgo: Date = new Date(Date.now() - sevenDaysMilliseconds);

  return person.status === PersonStatus.Active &&
    person.lastVisit >= weekAgo;
};

const fromAPI = (person: PersonAPI): Person => {
  const name: string = buildPersonName(person);
  const active: boolean = isActive(person);

  return {
    id: person.id,
    name,
    email: person.email,
    active
  };
};

const payloadAPI = {
  id: 1,
  name: 'TK',
  lastname: 'Kinoshita',
  email: 'tk@mail.com',
  status: 'active',
  lastVisit: new Date()
};

const person = fromAPI(payloadAPI);
