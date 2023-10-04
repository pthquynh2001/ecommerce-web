import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import { useState, useEffect, useRef } from 'react';
import { getCollectionNames } from '../../api/getAPIs';
import { getFilterNames } from '../../api/getAPIs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const Filter = () => {
  const [collections, setCollections] = useState([]);
  const [filters, setFilters] = useState([]);
  const [minRange, setMinRange] = useState(1);
  const [maxRange, setMaxRange] = useState(100);
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(100);
  const rangeInputsRef = useRef([]);
  const textInputsRef = useRef([]);
  const progressRef = useRef();
  let priceGap = 10;
  let priceMax = rangeInputsRef.current[0] ? rangeInputsRef.current[0].max : 0;

  // START: fetch API
  useEffect(() => {
    const fetchCollectionData = async () => {
      const data = await getCollectionNames();
      setCollections(data);
    };

    const fetchFilterData = async () => {
      const data = await getFilterNames();
      setFilters(data);
    };
    fetchCollectionData();
    fetchFilterData();
  }, []);

  // END: fetch API

  // START: Price filter
  // -------cap nhat text input + progress khi range thay doi
  useEffect(() => {
    setMinVal(minRange);
    setMaxVal(maxRange);
    let positionMin = (minRange / priceMax) * 100;
    let positionMax = 100 - (maxRange / priceMax) * 100;
    progressRef.current.style.left = `${positionMin}%`;
    progressRef.current.style.right = `${positionMax}%`;
  }, [minRange, maxRange, priceMax]);

  // --------cap nhat khi text thay doi => range thay doi
  useEffect(() => {
    setMinRange(minVal);
    setMaxRange(maxVal);
  }, [minVal, maxVal]);

  // --------input change => update data
  const handleMinRangeChange = (e) => {
    const newMinRange = Math.min(e.target.value, maxRange - priceGap);
    setMinRange(newMinRange);
  };
  const handleMaxRangeChange = (e) => {
    const newMaxRange = Math.max(e.target.value, priceGap + minRange);
    setMaxRange(newMaxRange);
  };

  const handleMinTextChange = (e) => {
    const newMinVal = Math.min(Math.max(e.target.value, 1), maxVal - priceGap);
    setMinVal(newMinVal);
  };

  const handleMaxTextChange = (e) => {
    const newMaxVal = Math.max(
      Math.min(e.target.value, 100),
      minVal + priceGap
    );
    setMaxVal(newMaxVal);
  };

  // END: Price filter

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('filter-item', 'filter-cat')}>
          <h2 className={cx('title')}>category</h2>
          <div className={cx('content')}>
            {collections.map((cat, index) => {
              return (
                <ul className={cx('list', 'cat-list')} key={index}>
                  <h3 className={cx('sub-title')}>{cat.catName}</h3>
                  <span className={cx('collapsible')}>+</span>
                  <ul className={cx('sub-list')}>
                    {cat.subCat.map((item, index) => {
                      return (
                        <li className={cx('item')} key={index}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </ul>
              );
            })}
          </div>
        </div>

        <div className={cx('filter-item', 'filter-price')}>
          <h2 className={cx('title')}>price</h2>
          <div className={cx('content')}>
            <div className={cx('progress')} ref={progressRef}></div>
            <div className={cx('range-inputs')}>
              <input
                id='range-min'
                className={cx('range-min')}
                type='range'
                min='1'
                max='100'
                step='1'
                value={minRange}
                onInput={handleMinRangeChange}
                ref={(element) => (rangeInputsRef.current[0] = element)}
              />
              <input
                id='range-max'
                className={cx('range-max')}
                type='range'
                min='1'
                max='100'
                step='1'
                value={maxRange}
                onInput={handleMaxRangeChange}
                ref={(element) => (rangeInputsRef.current[1] = element)}
              />
            </div>
            <div className={cx('text-inputs')}>
              <span className={cx('currency')}>$</span>
              <input
                className={cx('text-min')}
                type='number'
                min='1'
                max='94'
                value={minVal}
                onChange={handleMinTextChange}
                ref={(element) => (textInputsRef.current[0] = element)}
              />
              <span className={cx('separate-line')}></span>
              <span className={cx('currency')}>$</span>
              <input
                className={cx('text-max')}
                type='number'
                min='6'
                max='100'
                value={maxVal}
                onChange={handleMaxTextChange}
                ref={(element) => (textInputsRef.current[1] = element)}
              />
            </div>
            <button className={cx('btn', 'filter-price-btn')}>
              <p className={cx('btn-text')}>Filter Price</p>
            </button>
          </div>
        </div>

        {filters.map((filter, index) => (
          <div className={cx('filter-item')} key={index}>
            <h2 className={cx('title')}>{filter.filterName}</h2>
            <span className={cx('collapsible')}>+</span>
            <div className={cx('content')}>
              <ul className={cx('list')}>
                {filter.filterItem.map((item, index) => {
                  return (
                    <li className={cx('item')} key={index}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
