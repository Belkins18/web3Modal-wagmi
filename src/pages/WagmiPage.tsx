/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect } from 'react'
import {
  useAccount,
  useBalance,
  useReadContract,
  useWriteContract,
} from 'wagmi'

import {
  EAbiMethods,
  ISpaceships,
  abi,
  transformSpaceshipsResult,
} from '../contract'
import { GameHeader } from '../components'
import { parseEther } from 'viem'
import { formatNumber } from '../utils'

export const WagmiPage = () => {
  const { address } = useAccount()
  const { writeContract, status: writeContractStatus } = useWriteContract()
  const {
    data: balance,
    isLoading: isBalanceLoading,
    refetch,
  } = useBalance({
    address: address,
  })

  // readContract
  const { data: spaceshipsData, isSuccess: isSpaceshipsDataReady } =
    useReadContract({
      abi,
      address: import.meta.env.VITE_APP_CONTRACT,
      functionName: EAbiMethods.spaceships,
      args: [address],
      query: {
        enabled: !!balance && !isBalanceLoading,
      },
    })

  const { data: totalInvested, isSuccess: isTotalInvestedReady } =
    useReadContract({
      abi,
      address: import.meta.env.VITE_APP_CONTRACT,
      functionName: EAbiMethods.totalInvested,
    })

	if (isTotalInvestedReady) {
		console.log(totalInvested)
		console.log(formatNumber(Number(totalInvested)))
	}

  // writeContract
  const buyGalaxits = () => {
    const referrer = '0x0000000000000000000000000000000000000000'

    writeContract({
      abi,
      address: import.meta.env.VITE_APP_CONTRACT,
      functionName: 'buyGalaxits',
      args: [referrer],
      value: parseEther('0.01'),
    })
  }

  if (writeContractStatus === 'success') {
    refetch()
  }

  // console.log(abi)

  return (
    <div id="wagmi">
      {!!spaceshipsData && (
        <GameHeader
          balance={balance ? balance : 0}
          spaceships={transformSpaceshipsResult(
            spaceshipsData as any[],
            abi.filter(
              (item) => item.name === EAbiMethods.spaceships
            )[0] as ISpaceships
          )}
        />
      )}
      <header>
        <section>
          <h2>Wagmi</h2>
          <span>{address ? address : ''}</span>
        </section>
        <w3m-button balance="show" label={'connect Wallet'} />
      </header>
      <main>
        <section>
          <h3>Show custom balance:</h3>
          {isBalanceLoading ? (
            <>Loading...</>
          ) : (
            <div>{balance ? `${balance.formatted} ${balance.symbol}` : ''}</div>
          )}
        </section>
        <section>
          <h3>Read Contract:</h3>
          <div>
            {EAbiMethods.spaceships}:{' '}
            {isSpaceshipsDataReady
              ? JSON.stringify(isSpaceshipsDataReady)
              : null}
          </div>

          <div>
            {EAbiMethods.totalInvested}:{' '}
            {isTotalInvestedReady ? formatNumber(Number(totalInvested)) : null}
          </div>
        </section>
        <section>
          <h3>Write Contract:</h3>
          <button onClick={buyGalaxits}>Buy Galaxits</button>
        </section>
      </main>
    </div>
  )
}
