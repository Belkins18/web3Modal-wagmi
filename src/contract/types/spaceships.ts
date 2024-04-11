/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ISpaceships {
  inputs: { internalType: string; name: string; type: string }[]
  name: string
  outputs: { internalType: string; name: string; type: string }[]
  stateMutability: string
  type: string
}
export type TSpaceshipsOutputValue = bigint | string

export function transformSpaceshipsResult(
  result: any[],
  abi: ISpaceships
): { [x: string]: TSpaceshipsOutputValue } {
  const transformedResult: { [x: string]: TSpaceshipsOutputValue } = {}

  result.forEach((value, index) => {
    const output = abi.outputs[index]
    const outputName = output.name

    if (output.internalType === 'uint256' || output.internalType === 'int256') {
      transformedResult[outputName] = BigInt(value)
    } else {
      transformedResult[outputName] = value.toString()
    }
  })

  return transformedResult
}
