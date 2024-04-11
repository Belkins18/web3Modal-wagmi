import { HTMLAttributes } from 'react'
import classNames from 'classnames'

import styles from './GameHeader.module.css'

import { TSpaceshipsOutputValue } from '../../contract'
import { formatNumber } from '../../utils'

interface IGameHeaderProps extends HTMLAttributes<HTMLElement> {
  balance:
    | {
        decimals: number
        formatted: string
        symbol: string
        value: bigint
      }
    | number
  spaceships: {
    [x: string]: TSpaceshipsOutputValue
  }
}

enum EResourcesType {
  coin = 'coin',
  galaxits = 'galaxits',
  minerals = 'minerals',
  crystals = 'crystals',
  boost = 'boost',
  rig = 'rig',
}

export const GameHeader = ({
  balance,
  spaceships,
  className,
  ...rest
}: IGameHeaderProps) => {
  const resourcesList = [
    {
      icon: 'coin',
      type: EResourcesType.coin,
      value:
        typeof balance !== 'number'
          ? `${balance.formatted} ${balance.symbol}`
          : balance,
    },
    {
      icon: 'galaxit',
      type: EResourcesType.galaxits,
      value: formatNumber(Number(spaceships.galaxits)),
    },
    {
      icon: 'mineral',
      type: EResourcesType.minerals,
      value: 0,
    },
    {
      icon: 'crystal',
      type: EResourcesType.crystals,
      value: 0,
    },
    {
      icon: 'boost',
      type: EResourcesType.boost,
      value: 0,
    },
  ]

  return (
    <header className={classNames(styles.Header, className)} {...{ ...rest }}>
      <div className={styles.Container}>
        <div className={styles.ResourcesList}>
          {resourcesList.map((item) => {
            return (
              <div className={styles.ResourcesListItem} key={item.type}>
                <div className={styles.ResourcesListItem__img}>
                  <img
                    src={`src/assets/images/game/resources/default/${item.icon}.png`}
                    alt=""
                  />
                </div>
                <div className={styles.ResourcesListItem__value}>
                  {item.value.toString()}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </header>
  )
}
