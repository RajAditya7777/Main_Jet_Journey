import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Search,
  Filter
} from 'lucide-react';
import Footer from './Footer';

const API_KEY = 'cd8b99100115ff3ca5cd4df948dd1432';

const SearchFlight = ({ setTab }) => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [searchType, setSearchType] = useState('flight');
  const [inputValue, setInputValue] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTab('search');

    const fetchFlights = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://api.aviationstack.com/v1/flights?access_key=${API_KEY}`);
        const data = await response.json();
        if (data && data.data) {
          setFlights(data.data);
          setFilteredFlights(data.data);
        }
      } catch (error) {
        console.error('Error fetching flights:', error);
      } finally {
        setLoading(false);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-[#f0f4f8] min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 w-full py-20 pb-32 rounded-b-[3rem] shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Find Your Flight
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg sm:text-xl mb-8 max-w-2xl mx-auto"
          >
            Track real-time flight status worldwide with precision and ease.
          </motion.p>
        </div>
      </div>

      {/* Search & Filter Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 p-6 sm:p-8"
        >
          {/* Search Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100/50 p-1 rounded-xl">
              <button
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${searchType === 'flight'
                  ? 'bg-white text-blue-600 shadow-sm ring-1 ring-black/5'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
                onClick={() => setSearchType('flight')}
              >
                <Plane className="w-4 h-4" />
                Flight Number
              </button>
              <button
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${searchType === 'destination'
                  ? 'bg-white text-blue-600 shadow-sm ring-1 ring-black/5'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
                onClick={() => setSearchType('destination')}
              >
                <MapPin className="w-4 h-4" />
                Destination
              </button>
            </div>
          </div>

          {/* Search Input */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
              placeholder={`Enter ${searchType === 'flight' ? 'flight number (e.g., AA123)' : 'destination airport (e.g., JFK)'}`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {['All', 'Active', 'Scheduled', 'Landed', 'Delayed', 'Cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${statusFilter === status || (status === 'All' && statusFilter === 'All')
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }`}
              >
                {status}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <PlaneTakeoff className="w-5 h-5 text-blue-600" />
            Flight Results
            <span className="ml-2 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
              {filteredFlights.length}
            </span>
          </h3>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-6"
          >
            <AnimatePresence>
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
                  scheduled: { icon: <Clock className="w-4 h-4" />, bg: 'bg-blue-100', color: 'text-blue-700' },
                  active: { icon: <Activity className="w-4 h-4" />, bg: 'bg-green-100', color: 'text-green-700' },
                  landed: { icon: <CheckCircle className="w-4 h-4" />, bg: 'bg-emerald-100', color: 'text-emerald-700' },
                  cancelled: { icon: <XCircle className="w-4 h-4" />, bg: 'bg-red-100', color: 'text-red-700' },
                  delayed: { icon: <Hourglass className="w-4 h-4" />, bg: 'bg-amber-100', color: 'text-amber-700' },
                  diverted: { icon: <RefreshCcw className="w-4 h-4" />, bg: 'bg-orange-100', color: 'text-orange-700' },
                };
                const badge = statusMap[status] || { icon: null, bg: 'bg-gray-100', color: 'text-gray-600' };

                return (
                  <motion.div
                    key={`${flight.flight?.iata}-${idx}`}
                    variants={itemVariants}
                    layout
                    whileHover={{ scale: 1.01, y: -2 }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Airline & Info */}
                        <div className="w-full md:w-1/4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                              <Plane className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">{flight.airline?.name}</h4>
                              <p className="text-sm text-gray-500 font-mono">{flight.flight?.iata}</p>
                            </div>
                          </div>
                          <div className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {flight.departure?.scheduled?.slice(0, 10)}
                          </div>
                        </div>

                        {/* Route Visualization */}
                        <div className="flex-1 w-full flex items-center justify-between gap-4">
                          <div className="text-center min-w-[80px]">
                            <div className="text-2xl font-bold text-gray-900">{flight.departure?.iata}</div>
                            <div className="text-xs text-gray-500 mt-1">{depTime ? depTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--'}</div>
                            <div className="text-[10px] text-gray-400 mt-0.5">
                              {flight.departure?.terminal ? `T${flight.departure.terminal}` : ''}
                              {flight.departure?.gate ? ` G${flight.departure.gate}` : ''}
                            </div>
                          </div>

                          <div className="flex-1 flex flex-col items-center relative px-4">
                            <div className="text-xs font-medium text-gray-400 mb-1">{durationStr}</div>
                            <div className="w-full h-0.5 bg-gray-200 relative">
                              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200"></div>
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-1">
                                <Plane className="w-4 h-4 text-gray-300 rotate-90" />
                              </div>
                            </div>
                          </div>

                          <div className="text-center min-w-[80px]">
                            <div className="text-2xl font-bold text-gray-900">{flight.arrival?.iata}</div>
                            <div className="text-xs text-gray-500 mt-1">{arrTime ? arrTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--'}</div>
                            <div className="text-[10px] text-gray-400 mt-0.5">
                              {flight.arrival?.terminal ? `T${flight.arrival.terminal}` : ''}
                              {flight.arrival?.gate ? ` G${flight.arrival.gate}` : ''}
                            </div>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div className="w-full md:w-auto flex justify-end">
                          <div className={`px-4 py-2 rounded-full flex items-center gap-2 ${badge.bg} ${badge.color}`}>
                            {badge.icon}
                            <span className="text-sm font-semibold capitalize">{status?.replace('_', ' ')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchFlight;