import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import PriceFilter from './PriceFilter';
import { useState, useEffect } from 'react';
import { COLLECTION_NAMES } from '../../../constants';
import { getFilterNames } from '../../api/getAPIs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const Filter = () => {
  const [filters, setFilters] = useState([]);
  const [openCategories, setOpenCategories] = useState([]);
  const [openFilters, setOpenFilters] = useState([]);
  const collections = COLLECTION_NAMES;
  // START: fetch API
  useEffect(() => {
    const fetchFilterData = async () => {
      const data = await getFilterNames();
      setFilters(data);
    };
    fetchFilterData();
  }, []);

  // END: fetch API

  // START: collapsible
  // open/close categories
  const toggleCategory = (index) => {
    const updatedOpenCategories = [...openCategories];
    updatedOpenCategories[index] = !updatedOpenCategories[index];
    setOpenCategories(updatedOpenCategories);
  };

  // open/close filters
  const toggleFilter = (index) => {
    const updatedOpenFilters = [...openFilters];
    updatedOpenFilters[index] = !updatedOpenFilters[index];
    setOpenFilters(updatedOpenFilters);
  };
  // END: collapsible

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('filter-item', 'filter-cat')}>
          <h2 className={cx('title')}>category</h2>
          <ul className={cx('content', 'cat-list')}>
            {collections.map((cat, index) => {
              return (
                <li className={cx('cat-item')} key={index}>
                  <button
                    className={cx('collapsible-btn')}
                    onClick={() => toggleCategory(index)}
                  >
                    <h3 className={cx('sub-title')}>{cat.catName} Products</h3>
                    <i
                      className={cx('collapsible-icon', 'minus', {
                        show: openCategories[index],
                      })}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </i>
                    <i
                      className={cx('collapsible-icon', 'plus', {
                        show: !openCategories[index],
                      })}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </i>
                  </button>
                  <ul
                    className={cx('collapsible-list', {
                      open: openCategories[index],
                    })}
                  >
                    {cat.subCat.map((item, index) => {
                      return (
                        <li className={cx('list-item')} key={index}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>

        <PriceFilter />

        {filters.map((filter, index) => (
          <div className={cx('filter-item')} key={index}>
            <button
              className={cx('collapsible-btn')}
              onClick={() => toggleFilter(index)}
            >
              <h2 className={cx('title')}>{filter.filterName}</h2>
              <i
                className={cx('collapsible-icon', 'minus', {
                  show: openFilters[index],
                })}
              >
                <FontAwesomeIcon icon={faMinus} />
              </i>
              <i
                className={cx('collapsible-icon', 'plus', {
                  show: !openFilters[index],
                })}
              >
                <FontAwesomeIcon icon={faPlus} />
              </i>
            </button>
            <ul
              className={cx('collapsible-list', {
                open: openFilters[index],
              })}
            >
              {filter.filterItem.map((item, index) => {
                return (
                  <li className={cx('list-item')} key={index}>
                    <label
                      htmlFor={`${filter.filterName}-input-${index}`}
                      className={cx('holder')}
                    >
                      <input
                        id={`${filter.filterName}-input-${index}`}
                        type='checkBox'
                      />
                      <span className={cx('checkmark')}>
                        <i>
                          <FontAwesomeIcon icon={faCheck} />
                        </i>
                      </span>
                      <span className={cx('item-text')}>{item}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
