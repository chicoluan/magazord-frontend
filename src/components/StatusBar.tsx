import type { JSX } from 'react'
import { Bradesco, Spotify } from './ui/icons'
import {
  AlarmClock,
  BatteryLow,
  BellOff,
  BluetoothConnected,
  ChevronsUpDown,
  SignalMedium,
  Wifi,
} from 'lucide-react'

export default function StatusBar(): JSX.Element {
  return (
    <div className="flex bg-primary p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-sm">15:18</p>
          <Spotify className="size-5" />
          <Bradesco className="size-5" />
        </div>
        <div className="flex items-center gap-2">
          <AlarmClock className="size-5" />
          <BluetoothConnected className="size-5" />
          <BellOff className="size-5" />

          <ChevronsUpDown className="size-4" />
          <Wifi className="size-5" />
          <SignalMedium className="size-5" />
          <BatteryLow className="size-5" />
        </div>
      </div>
    </div>
  )
}
