import { useState, useMemo } from 'react';

const useSearchBadges = (badges) => {
  const [query, setQuery] = useState('');
  const [filteredBadges, setFilteredBadges] = useState(badges);

  useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return [setQuery, filteredBadges, query];
};

export default useSearchBadges;
