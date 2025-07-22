import React, { useEffect, useState } from 'react';
import {
  Plane,
  MapPin,
  PlaneTakeoff,
  RotateCcw,
  Clock,
  Activity,
  CheckCircle,
  XCircle,
  Hourglass,
  RefreshCcw,
} from 'lucide-react';

const API_KEY = 'cd8b99100115ff3ca5cd4df948dd1432';

const SearchFlight = ({ setTab }) => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [searchType, setSearchType] = useState('flight');
  const [inputValue, setInputValue] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    setTab('search');

    const fetchFlights = async () => {
      try {
        const response = await fetch(`http://api.aviationstack.com/v1/flights?access_key=${API_KEY}`);
        const data = await response.json();
        if (data && data.data) {
          setFlights(data.data);
          setFilteredFlights(data.data);
        }
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    fetchFlights();
  }, [setTab]);

  useEffect(() => {
    const search = inputValue.toLowerCase();

    const filtered = flights.filter((flight) => {
      const flightNumber = flight.flight?.iata?.toLowerCase() || '';
      const arrivalAirport = flight.arrival?.iata?.toLowerCase() || '';

      const matchesSearch =
        searchType === 'flight'
          ? flightNumber.includes(search)
          : arrivalAirport.includes(search);

      const matchesStatus =
        statusFilter === 'All' || flight.flight_status?.toLowerCase() === statusFilter.toLowerCase();

      return matchesSearch && matchesStatus;
    });

    setFilteredFlights(filtered);
  }, [inputValue, searchType, statusFilter, flights]);

  return (
    <div className="bg-[#f9fbfd] min-h-screen">

      {/* Blue background now full width */}
      <div className="bg-[#0047AB] w-full pb-0.5">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-40">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 pt-8">Flight Search</h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow mb-8">
            <div className="flex flex-col xs:flex-row gap-2 mb-3 sm:flex-row">
              <button
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border transition text-sm sm:text-base ${searchType === 'flight'
                    ? 'border-blue-500 text-blue-600 bg-blue-50 font-medium'
                    : 'border-gray-300 text-gray-500 bg-gray-100'
                  }`}
                onClick={() => setSearchType('flight')}
              >
                <Plane className="w-4 h-4" />
                Flight
              </button>
              <button
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border transition text-sm sm:text-base ${searchType === 'destination'
                    ? 'border-blue-500 text-blue-600 bg-blue-50 font-medium'
                    : 'border-gray-300 text-gray-500 bg-gray-100'
                  }`}
                onClick={() => setSearchType('destination')}
              >
                <MapPin className="w-4 h-4" />
                Destination
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center border border-gray-300 rounded-full overflow-hidden">
              <div className="pl-4 pr-2 text-gray-400">
                <PlaneTakeoff className="w-4 h-4" />
              </div>
              <input
                type="text"
                className="flex-1 py-2 pr-3 text-sm focus:outline-none min-w-0"
                placeholder={`Enter ${searchType === 'flight' ? 'flight number (e.g., AA123)' : 'arrival airport (e.g., JFK)'
                  }`}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters + Results */}
      <div className="max-w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-40 mt-5">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters */}
          <div className="w-full lg:max-w-xs bg-white rounded-2xl shadow-lg p-4 flex flex-col mb-4 h-90 overflow-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Filters</h2>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">Flight Status</p>
              <div className="flex flex-col gap-2">
                {[
                  { value: 'All', label: 'All' },
                  { value: 'scheduled', label: 'Scheduled' },
                  { value: 'active', label: 'Active' },
                  { value: 'landed', label: 'Landed' },
                  { value: 'cancelled', label: 'Cancelled' },
                  { value: 'delayed', label: 'Delayed' },
                  { value: 'diverted', label: 'Diverted' },
                ].map((status) => (
                  <label key={status.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      value={status.value}
                      checked={statusFilter === status.value}
                      onChange={() => setStatusFilter(status.value)}
                      className="accent-blue-500 w-3 h-3"
                    />
                    <span className="text-gray-700 text-sm font-normal">{status.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-200 rounded-full py-1.5 bg-gray-50 text-gray-600 text-sm font-medium transition hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 active:scale-95"
              onClick={() => {
                setStatusFilter('All');
                setInputValue('');
                setSearchType('flight');
              }}
            >
              <RotateCcw className="w-3 h-3" />
              Reset Filters
            </button>
          </div>

          {/* Results */}
          <div className="flex-1 space-y-4">
            <p className="text-gray-500 text-sm">{filteredFlights.length} flights found</p>
            {filteredFlights.map((flight, idx) => {
              const depTime = flight.departure?.scheduled ? new Date(flight.departure.scheduled) : null;
              const arrTime = flight.arrival?.scheduled ? new Date(flight.arrival.scheduled) : null;

              let durationStr = '';
              if (depTime && arrTime) {
                const diffMs = arrTime - depTime;
                if (diffMs > 0) {
                  const hours = Math.floor(diffMs / (1000 * 60 * 60));
                  const mins = Math.floor((diffMs / (1000 * 60)) % 60);
                  durationStr = `${hours}h ${mins}m`;
                }
              }

              const status = flight.flight_status;
              const statusMap = {
                scheduled: { icon: <Clock className="w-5 h-5" />, bg: 'bg-blue-50', color: 'text-blue-500' },
                active: { icon: <Activity className="w-5 h-5" />, bg: 'bg-green-50', color: 'text-green-600' },
                landed: { icon: <CheckCircle className="w-5 h-5" />, bg: 'bg-emerald-50', color: 'text-emerald-500' },
                cancelled: { icon: <XCircle className="w-5 h-5" />, bg: 'bg-red-50', color: 'text-red-500' },
                delayed: { icon: <Hourglass className="w-5 h-5" />, bg: 'bg-yellow-50', color: 'text-orange-400' },
                diverted: { icon: <RefreshCcw className="w-5 h-5" />, bg: 'bg-orange-50', color: 'text-orange-500' },
              };
              const badge = statusMap[status] || { icon: null, bg: 'bg-gray-100', color: 'text-gray-400' };

              return (
                <div
                  key={`${flight.flight?.iata}-${idx}`}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row items-start sm:items-stretch px-5 py-4 gap-6 cursor-pointer group border border-gray-100 hover:border-blue-200"
                >
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2 group-hover:text-blue-600 transition-colors duration-200">
                        {flight.airline?.name} {flight.flight?.iata}
                      </div>
                      <div className="text-gray-400 text-sm font-medium">{flight.departure?.scheduled?.slice(0, 10)}</div>
                    </div>

                    <div className="flex flex-row items-end justify-between w-full mt-4">
                      <div className="flex flex-col items-start min-w-[70px]">
                        <span className="text-gray-500 text-base font-medium mb-1">
                          {depTime ? depTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--'}
                        </span>
                        <span className="text-xl font-bold text-gray-800 leading-none">
                          {flight.departure?.iata}
                        </span>
                        <span className="text-gray-400 text-xs mt-1">
                          {flight.departure?.terminal ? `Terminal ${flight.departure.terminal}` : ''}
                          {flight.departure?.gate ? `, Gate ${flight.departure.gate}` : ''}
                        </span>
                      </div>

                      <div className="flex-1 flex flex-col items-center">
                        <div className="w-full border-t border-dashed border-gray-300 relative mt-3 mb-1">
                          {durationStr && (
                            <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-2 text-gray-400 text-xs font-medium">
                              {durationStr}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col items-end min-w-[70px]">
                        <span className="text-gray-500 text-base font-medium mb-1">
                          {arrTime ? arrTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--'}
                        </span>
                        <span className="text-xl font-bold text-gray-800 leading-none">
                          {flight.arrival?.iata}
                        </span>
                        <span className="text-gray-400 text-xs mt-1 text-right">
                          {flight.arrival?.terminal ? `Terminal ${flight.arrival.terminal}` : ''}
                          {flight.arrival?.gate ? `, Gate ${flight.arrival.gate}` : ''}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center sm:items-start justify-end min-w-[120px]">
                    <span
                      className={`inline-flex items-center px-4 py-1.5 rounded-full font-medium text-sm gap-2 ${badge.bg} ${badge.color} group-hover:scale-105 transition-transform duration-200`}
                    >
                      {badge.icon}
                      {status?.charAt(0).toUpperCase() + status?.slice(1).replace('_', ' ')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFlight;